import java.io.IOException;
import java.io.BufferedWriter;
import java.io.InputStreamReader;
import java.io.BufferedReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;

public class Main {

    private static int R, C, T;
    private static int top, bottom;

    private static int[] di = new int[] {-1, 0, 1, 0};
    private static int[] dj = new int[] {0, 1, 0, -1};

    private static int[][] room, temp;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();

        StringTokenizer st = new StringTokenizer(br.readLine());

        R = Integer.parseInt(st.nextToken());
        C = Integer.parseInt(st.nextToken());
        T = Integer.parseInt(st.nextToken());

        room = new int[R][C];
        for (int i = 0; i < R; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < C; j++) {
                room[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        int[] airPurifier = findAirPurifier();
        top = airPurifier[0];
        bottom = airPurifier[1];

        temp = new int[R][C];
        temp[top][0] = -1;
        temp[bottom][0] = -1;

        for (int t = 0; t < T; t++) {
            findDust();
            operateAirPurifier();
            next();
        }

        int result = calDustAmount();
        sb.append(result);
        bw.write(sb.toString());
        bw.flush();

        sb.setLength(0);
        br.close();
        bw.close();
    }

    private static int[] findAirPurifier() {
        for (int i = 0; i < R; i++) {
            if (room[i][0] == -1) {
                return new int[] {i, i + 1};
            }
        }
        return new int[] {-1, -1};
    }

    private static void findDust() {
        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                if (room[i][j] > 0) {
                    diffuseDust(i, j, room[i][j]);
                }
            }
        }
    }

    private static void diffuseDust(int i, int j, int dust) {
        int dir = 0;

        for (int k = 0; k < 4; k++) {
            int mi = i + di[k];
            int mj = j + dj[k];
            if (0 <= mi && mi < R && 0 <= mj && mj < C && room[mi][mj] >= 0) {
                temp[mi][mj] += dust / 5;
                dir++;
            }
        }

        temp[i][j] += dust - (dust / 5) * dir;
    }

    private static void operateAirPurifier() {
        int mi, mj;

        int ti = top - 1;
        int tj = 0;
        int topDir = 0;

        Top:
        while (true) {
            mi = ti + di[topDir];
            mj = tj + dj[topDir];
            if (0 <= mi && mi < R && 0 <= mj && mj < C && mi <= top) {
                if (temp[mi][mj] == -1) {
                    temp[ti][tj] = 0;
                    break Top;
                }
                temp[ti][tj] = temp[mi][mj];
                ti = mi;
                tj = mj;
            } else {
                topDir = topDir + 1;
                if (topDir >= 4) {
                    topDir = 0;
                }
            }
        }

        int bi = bottom + 1;
        int bj = 0;
        int botDir = 2;

        Bottom:
        while (true) {
            mi = bi + di[botDir];
            mj = bj + dj[botDir];
            if (0 <= mi && mi < R && 0 <= mj && mj < C && mi >= bottom) {
                if (temp[mi][mj] == -1) {
                    temp[bi][bj] = 0;
                    break Bottom;
                }
                temp[bi][bj] = temp[mi][mj];
                bi = mi;
                bj = mj;
            } else {
                botDir = botDir - 1;
                if (botDir < 0) {
                    botDir = 3;
                }
            }
        }
    }

    private static void next() {
        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                room[i][j] = temp[i][j];
                temp[i][j] = 0;
            }
        }
        temp[top][0] = -1;
        temp[bottom][0] = -1;
    }

    private static int calDustAmount() {
        int amount = 2;

        for (int i = 0; i < R; i++) {
            for (int j = 0; j < C; j++) {
                amount += room[i][j];
            }
        }

        return amount;
    }
}
