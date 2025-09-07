/* Write your T-SQL query statement below */
SELECT Sales.product_id
        ,ROUND(
            CAST( SUM(Sales.units*Prices.price) AS DECIMAL(10,2) ) 
            / 
            CAST( SUM(Sales.units) AS DECIMAL(10,2) )
        ,2) AS average_price
FROM UnitsSold Sales
LEFT JOIN Prices ON Sales.product_id = Prices.product_id
WHERE Sales.purchase_date BETWEEN Prices.start_date AND Prices.end_date
GROUP BY Sales.product_id
;