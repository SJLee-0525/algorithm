import java.io.BufferedWriter;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.IOException;

public class Main {

    private static int N, cnt;

    private static int[] di = {-1, -1};
    private static int[] dj = {1, -1};
    private static int[] used;

    private static int[][] board;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();

        N = Integer.parseInt(br.readLine());
        board = new int[N][N];
        used = new int[N];

        cnt = 0;
        putQueen(0);

        sb.append(cnt);
        bw.write(sb.toString());
        bw.flush();
        sb.setLength(0);
        
        br.close();
        bw.close();
    }

    private static void putQueen(int lv) {
        if (lv == N) {
            cnt++;
            return;
        }

        boolean isValid;
        for (int j = 0; j < N; j++) {
            if (used[j] == 1) continue;

            isValid = check(lv, j);
            if (!isValid) continue;

            used[j] = 1;
            board[lv][j] = 1;
            putQueen(lv + 1);
            used[j] = 0;
            board[lv][j] = 0;
        }
    }

    private static boolean check(int si, int sj) {
        for (int ci = 0; ci < si; ci++) {
            if (board[ci][sj] == 1) {
                return false;
            }
        }

        int mi, mj;
        for (int k = 0; k < 2; k++) {
            mi = si + di[k];
            mj = sj + dj[k];
            while (0 <= mi && mi < N && 0 <= mj && mj < N) {
                if (board[mi][mj] == 1) return false;
                mi += di[k];
                mj += dj[k];
            }
        }

        return true;
    }
}
