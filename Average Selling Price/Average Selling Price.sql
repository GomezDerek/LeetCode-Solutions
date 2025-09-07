/* Write your T-SQL query statement below */
SELECT Prices.product_id
        ,ROUND(
            CAST( 
                SUM( COALESCE(Sales.units,0.0) * Prices.price ) 
                / 
                COALESCE(SUM(Sales.units),1.0) 
            AS DECIMAL(10,2))
        ,2) AS average_price
FROM Prices
LEFT JOIN UnitsSold Sales ON Sales.product_id = Prices.product_id
WHERE Sales.purchase_date BETWEEN Prices.start_date AND Prices.end_date
        OR Sales.purchase_date IS NULL
GROUP BY Prices.product_id
;