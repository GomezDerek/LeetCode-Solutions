/* Write your T-SQL query statement below */
WITH cte(total_users)
AS
(SELECT COUNT(*) FROM Users)

SELECT r.contest_id
        ,ROUND(COUNT(r.user_id)*10.0 / (SELECT total_users FROM cte)*10.0, 2.0) AS percentage
FROM Register r
GROUP BY r.contest_id
ORDER BY percentage DESC, r.contest_id ASC
;