--CREATE DATABASE Company;
USE Company;
GO
IF NOT EXISTS (
    SELECT * FROM INFORMATION_SCHEMA.TABLES 
    WHERE TABLE_NAME = 'Employee'
)
BEGIN
    CREATE TABLE Employee (
        ID INT PRIMARY KEY,
        NAME VARCHAR(50),
        COMM DECIMAL(10,2),
        DEPTNO INT,
        DESIGN VARCHAR(50),
        SALARY DECIMAL(10,2),
        COMPANY VARCHAR(20) DEFAULT 'MAK TECH',
        HIREDATE DATE
    );
END

--INSERT INTO Employee (ID, NAME, COMM, DEPTNO, DESIGN, SALARY)
--VALUES 
--(1, 'Mihir', 2000, 10, 'Developer', 50000),
--(2, 'Mak', 1500, 20, 'Tester', 40000),
--(3, 'Anchu', 1800, 10, 'Developer', 55000),
--(4, 'Vikas', 2000, 30, 'HR', 45000),
--(5, 'riya', 2200, 20, 'Analyst', 48000),
--(6, 'Ashok', 1700, 10, 'Developer', 52000),
--(7, 'Sherya', 1600, 30, 'HR', 43000),
--(8, 'Rohit hitman', 2100, 20, 'Manager', 65000),
--(9, 'kayva', 1900, 10, 'Developer', 51000),
--(10, 'mk', 2500, 40, 'Team Lead', 70000);



--SELECT NAME, ID, SALARY
--FROM Employee
--WHERE DEPTNO = 10;

--SELECT * FROM Employee
--WHERE NAME LIKE '%A%' OR NAME LIKE '%E%';

--SELECT * FROM Employee
--WHERE NAME LIKE '__Y_';

--SELECT * FROM Employee
--WHERE DEPTNO =20 AND DESIGN='TESTER';

--UPDATE Employee
--SET HIREDATE = CASE
--    WHEN ID = 1 THEN '2001-01-12'
--    WHEN ID = 2 THEN '2002-02-15'
--    WHEN ID = 3 THEN '2003-09-18'
--    WHEN ID = 4 THEN '2009-04-20'
--    WHEN ID = 5 THEN '2005-05-25'
--    WHEN ID = 6 THEN '2002-11-10'
--    WHEN ID = 7 THEN '2007-07-14'
--    WHEN ID = 8 THEN '2001-12-12'
--    WHEN ID = 9 THEN '2004-09-22'
--    WHEN ID = 10 THEN '2010-10-30'
--END
--WHERE ID BETWEEN 1 AND 10;
SELECT * FROM Employee;

SELECT * FROM Employee
WHERE HIREDATE > '2005';

