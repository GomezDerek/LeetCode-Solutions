/* Write your T-SQL query statement below */
SELECT r.contest_id, 
        ROUND(COUNT(r.user_id)*10.0 / (SELECT COUNT(*) FROM Users)*10.0, 2.0) AS percentage
FROM Register r
GROUP BY contest_id
ORDER BY percentage DESC
;