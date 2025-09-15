/* Write your T-SQL query statement below */
/* first calc quality */
/* then calc poor query percentage */
SELECT query_name
        ,ROUND(AVG(1.0*rating/position),2) AS quality
        ,ROUND(100.0*
            (SELECT COUNT(*) 
            FROM Queries innerQ 
            WHERE outerq.query_name = innerQ.query_name AND innerQ.rating < 3)
            /COUNT(result)
        ,2) AS poor_query_percentage
FROM Queries outerQ
GROUP BY query_name
;