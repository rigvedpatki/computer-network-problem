import { calculateTotalNetworkStorage } from "./caluculate-network-storage";
import { getUserInput } from "./get-user-input";

async function main() {

  const response = getUserInput();

  if (!response) {
    throw 'Something went wrong in getUserInput'
  }

  calculateTotalNetworkStorage(response.nodes, response.edges, response.connectionsFrom, response.connectionsTo, response.storage, response.threshold);

}

main()
  .then(() => console.log('Execution completed'))
  .catch((error) => console.log('Error in main function', error));