#include <bits/stdc++.h>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    int M, N;
    cin >> M >> N;
    vector<string> HOME(N);
    for (int i = 0; i < N; i++) {
        cin >> HOME[i];
    }

    // 1) 시작(S), 끝(E), 그리고 물건 위치(things) 찾기
    pair<int,int> start, endp;
    vector<pair<int,int>> things;
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            char c = HOME[i][j];
            if (c == 'S') {
                start = {i, j};
            } else if (c == 'E') {
                endp = {i, j};
            } else if (c != '.' && c != '#') {
                things.emplace_back(i, j);
            }
        }
    }

    // locs = [start, ...things, end]
    vector<pair<int,int>> locs;
    locs.push_back(start);
    for (auto &p : things) locs.push_back(p);
    locs.push_back(endp);

    int L = locs.size();      // 총 위치 개수 (시작 + 물건들 + 끝)

    // 2) BFS 함수: 출발점(src)에서 모든 칸까지의 거리(steps+1) 계산
    auto bfs = [&](pair<int,int> src) {
        vector<vector<int>> dist(N, vector<int>(M, 0));
        queue<pair<int,int>> q;
        dist[src.first][src.second] = 1;
        q.push(src);

        const int dx[4] = {1, 0, -1, 0};
        const int dy[4] = {0, 1,  0,-1};

        while (!q.empty()) {
            auto [x, y] = q.front(); q.pop();
            for (int k = 0; k < 4; k++) {
                int nx = x + dx[k], ny = y + dy[k];
                if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
                if (HOME[nx][ny] == '#') continue;
                if (dist[nx][ny] == 0) {
                    dist[nx][ny] = dist[x][y] + 1;
                    q.push({nx, ny});
                }
            }
        }
        return dist;
    };

    // 3) 위치 간 최단 거리 테이블 생성: dist_table[i][j] = steps
    const int INF = 1e9;
    vector<vector<int>> dist_table(L, vector<int>(L, INF));
    for (int i = 0; i < L - 1; i++) {
        auto dgrid = bfs(locs[i]);
        for (int j = 0; j < L; j++) {
            if (i == j) continue;
            auto [tx, ty] = locs[j];
            if (dgrid[tx][ty] > 0) {
                // BFS에서는 시작점 거리를 1로 두었으므로 -1 해주기
                dist_table[i][j] = dgrid[tx][ty] - 1;
            }
        }
    }

    // 4) 물건 순열(permutation) 생성 및 최소 경로 합 계산
    int T = L - 2;  // 물건 개수
    int answer = INF;

    if (T == 0) {
        // 물건이 없으면 곧장 start->end
        answer = dist_table[0][1];
    } else {
        vector<int> perm(T);
        iota(perm.begin(), perm.end(), 1);  
        // perm = [1,2,...,T]  (locs 인덱스 기준: 0=start, 1..T=things, T+1=end)

        do {
            int sum = 0;
            int prev = 0;  // 시작점 인덱스
            for (int idx : perm) {
                sum += dist_table[prev][idx];
                prev = idx;
            }
            // 마지막에 end 위치까지
            sum += dist_table[prev][T+1];
            answer = min(answer, sum);
        } while (next_permutation(perm.begin(), perm.end()));
    }

    cout << answer << "\n";
    return 0;
}
