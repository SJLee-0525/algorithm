-- 코드를 작성해주세요
SELECT *
FROM (
    SELECT 
        SUM(G.SCORE) AS SCORE,
        E.EMP_NO,
        E.EMP_NAME,
        E.POSITION,
        E.EMAIL
    FROM HR_EMPLOYEES E
    LEFT JOIN HR_GRADE G
        ON E.EMP_NO = G.EMP_NO
    GROUP BY E.EMP_NO
) S
WHERE S.SCORE = (
    SELECT MAX(M.SCORE)
    FROM (
        SELECT SUM(G.SCORE) AS SCORE
        FROM HR_EMPLOYEES E
        LEFT JOIN HR_GRADE G
            ON E.EMP_NO = G.EMP_NO
        GROUP BY E.EMP_NO
    ) M
);