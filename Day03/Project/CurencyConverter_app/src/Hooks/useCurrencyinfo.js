import { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        const result = await res.json()
        setData(result.rates)
      } catch (error) {
        console.error("Failed to fetch currency info", error)
      }
    }

    fetchData()
  }, [currency])

  return data
}

export default useCurrencyInfo
