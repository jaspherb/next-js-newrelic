import { Text } from "@chakra-ui/react"
import useApi from "./useApi";
const Data = async () => {

    const { fetchDataTest} = useApi();
    
    const test = await fetchDataTest();
    return (
        <Text>{JSON.stringify(test)}</Text>
    )
}

export default Data