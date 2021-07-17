import { Network } from "./network";

export function calculateTotalNetworkStorage(nodes: number, edges: number, connectionsFrom: number[], connectionsTo: number[], storage: number[], threshold: number): void {

  const network: Network[] = [];

  for (let nodeIndex = 0; nodeIndex < nodes; nodeIndex++) {
    network[nodeIndex] = new Network();
    network[nodeIndex].insertAtStart(storage[nodeIndex], nodeIndex);
  }

  for (let edgeIndex = 0; edgeIndex < edges; edgeIndex++) {
    console.log(` Connection ${edgeIndex + 1} => `);

    let tempNetwork = network.find(el => {
      if (el.search((nodeIndex) => nodeIndex === connectionsFrom[edgeIndex])) {
        return true;
      } else {
        return false;
      }
    });
    if (tempNetwork) {
      tempNetwork.insertAtEnd(storage[connectionsTo[edgeIndex]], connectionsTo[edgeIndex]);
    } else {
      console.log('network not found with head index', connectionsFrom[edgeIndex])
    }

    let temp2Network = network.find(el => el['_head']?.nodeIndex === connectionsTo[edgeIndex])

    if (temp2Network) {
      const deleteComputerNode = temp2Network.search((nodeIndex) => nodeIndex === connectionsTo[edgeIndex])
      if (deleteComputerNode) {
        temp2Network.deleteNode(deleteComputerNode)
      }
    }

    let networkArray = network
      .map(el => {
        let storageArray = el.traverseNetwork();
        if (storageArray.length > 0) {
          let totalStorage = storageArray.reduce((previousValue, currentEl) => previousValue + currentEl.storage, 0)
          return totalStorage
        } else {
          return null;
        }
      })
      .filter(el => el !== null);
    console.log(`Network Storage Array => [${networkArray}]`);
    const belowThreshold = networkArray.filter((el) => {
      if (el && el <= threshold) {
        return true;
      } else {
        return false;
      }
    })
    console.log(`Number of network storage below threshold => [${belowThreshold}] , ${belowThreshold.length}`)
  }
}
