/* Write your T-SQL query statement below */

/* 
first find all months and put into CTE 
then join with transactions table
*/

-- WITH Cte (months) AS 
-- (
--     SELECT DISTINCT SUBSTRING(trans_date, 1, 7)
--     FROM Transactions
-- )

/*no cte needed. Just cases*/
SELECT FORMAT(trans_date, 'yyyy-MM') AS month
        ,country
        ,COUNT(id) AS trans_count
        ,SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count
        ,SUM(amount) AS trans_total_amount
        ,SUM(CASE WHEN state='approved' THEN amount ELSE 0 END) AS approved_total_amount
FROM Transactions
GROUP BY FORMAT(trans_date, 'yyyy-MM'), country
ORDER BY COUNT(id) DESC
;
