import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.BufferedWriter;
import java.io.BufferedReader;
import java.io.IOException;

public class Main {

    private static boolean isEnd;

    private static int[][] arr;
    private static int[][] result;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();

        arr = new int[9][9];
        for (byte i = 0; i < 9; i++) {
            String str = br.readLine();
            for (byte j = 0; j < 9; j++) {
                arr[i][j] = Character.getNumericValue(str.charAt(j));
            }
        }

        isEnd = false;
        result = new int[9][9];
        fillIn(0);

        for (byte i = 0; i < 9; i++) {
            for (byte j = 0; j < 9; j++) {
                sb.append(result[i][j]);
            }
            sb.append('\n');
        }
        bw.write(sb.toString());
        bw.flush();
        sb.setLength(0);

        br.close();
        bw.close();
    }

    private static void fillIn(int lv) {
        if (isEnd) {
            return;
        }

        if (lv == 81) {
            for (byte i = 0; i < 9; i++) {
                for (byte j = 0; j < 9; j++) {
                    if (arr[i][j] == 0) {
                        return;
                    }
                    result[i][j] = arr[i][j];
                }
            }
            isEnd = true;
            return;
        }

        int i = lv / 9;
        int j = lv % 9;
        if (arr[i][j] > 0) {
            fillIn(lv + 1);
            return;
        }

        int[] impossibleNumbers = checkLine(i, j);

        for (int num = 1; num < 10; num++) {
            if (impossibleNumbers[num] == 0) {
                arr[i][j] = num;
                fillIn(lv + 1);
                arr[i][j] = 0;
            }
        }
    }

    private static int[] checkLine(int i, int j) {
        int[] impossibleNumbers = new int[10];

        int si = i - i % 3;
        int sj = j - j % 3;
        for (int ci = si; ci < si + 3; ci++) {
            for (int cj = sj; cj < sj + 3; cj++) {
                if (arr[ci][cj] > 0) {
                    impossibleNumbers[arr[ci][cj]] = 1;
                }
            }
        }

        for (int c = 0; c < 9; c++) {
            if (arr[i][c] > 0) {
                impossibleNumbers[arr[i][c]] = 1;
            }
            if (arr[c][j] > 0) {
                impossibleNumbers[arr[c][j]] = 1;
            }
        }

        return impossibleNumbers;
    }
}
