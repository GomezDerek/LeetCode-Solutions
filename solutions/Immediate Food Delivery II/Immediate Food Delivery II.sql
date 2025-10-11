/* Write your T-SQL query statement below */

WITH first_orders AS
(
    SELECT 
        customer_id 
        ,order_date
        ,customer_pref_delivery_date
        ,ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS rn
    FROM Delivery
)

SELECT ( 
    ROUND(
        COUNT(CASE WHEN order_date = customer_pref_delivery_date THEN 1 END) * 1.0 
        / COUNT(*) 
        * 100
    , 2)
    ) AS immediate_percentage
FROM first_orders
WHERE rn = 1
;