import System.Environment

doubleNumber :: Double -> Double
doubleNumber x = 2 * x

main :: IO ()
main = do
    args <- getArgs
    let number = read (head args) :: Double
    let result = doubleNumber number
    putStrLn $ "Twice the number is: " ++ show result
