/* Write your T-SQL query statement below */
/**
    GOAL: find the percentage of first orders that are immediate
    STRATEGY:
        1. select all first orders
            a. assume DISTINCT will return first row in selection
        2. calc percentage of immediate from first orders
*/

WITH first_orders (customer_id, order_date, customer_pref_delivery_date)
AS
(
    SELECT customer_id
        ,order_date
        ,customer_pref_delivery_date
    FROM (
        SELECT 
            customer_id 
            ,order_date
            ,customer_pref_delivery_date
            ,ROW_NUMBER() OVER (PARTITION BY customer_id ORDER BY order_date) AS rn
        FROM Delivery
    ) AS d
    WHERE rn = 1
)

SELECT ( ROUND(1.0 * COUNT(CASE WHEN order_date = customer_pref_delivery_date THEN 1 END) / COUNT(*), 2) * 100) AS immediate_percentage
FROM first_orders
;