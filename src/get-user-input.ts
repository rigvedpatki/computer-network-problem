import prompt from 'prompt-sync';


const MAX_ALLOWED = 105;


const checkNodesAndEdges = (nodes: number, edges: number): void => {
  if (nodes <= 1 && nodes >= MAX_ALLOWED) {
    throw `Node dont meet the constraints => ${nodes}`;
  }
  if (edges <= 1 && edges >= Math.min((nodes * (nodes - 1) / 2), MAX_ALLOWED)) {
    throw `Edges dont meet the constraints => ${edges}`;
  }
}

const checkFromAndToConnections = (nodes: number, edges: number, connectionsFrom: number[], connectionsTo: number[]): void => {
  for (let nodeIndex = 0; nodeIndex < nodes; nodeIndex++) {
    let nodeConnectionsFrom: number[] = [];
    let nodeConnectionsTo: number[] = [];
    for (let edgeIndex = 0; edgeIndex < edges; edgeIndex++) {
      if (nodeIndex === connectionsFrom[edgeIndex]) {
        nodeConnectionsTo.push(connectionsTo[edgeIndex]);
      }
      if (nodeIndex === connectionsTo[edgeIndex]) {
        nodeConnectionsFrom.push(connectionsFrom[edgeIndex]);
      }
    }
    if (nodeConnectionsFrom.length > nodes) {
      throw `Connection from dont meet the constraints => nodeIndex = ${nodeIndex}, nodeConnectionsFrom = ${nodeConnectionsFrom} `;
    }
    if (nodeConnectionsTo.length > nodes) {
      throw `Connection to dont meet the constraints => nodeIndex = ${nodeIndex}, nodeConnectionsTo = ${nodeConnectionsTo} `;
    }
  }

}

const checkStorageNodes = (storageNodes: number): void => {
  if (storageNodes <= 1 && storageNodes >= MAX_ALLOWED - 1) {
    throw `Storage Nodes dont meet the constraints => ${storageNodes}`;
  }
}

const checkStorageThreshold = (threshold: number): void => {
  if (threshold <= 1 && threshold >= MAX_ALLOWED + 4) {
    throw `Threshold does not meet the constraints => ${threshold}`;
  }
}

export const getUserInput = () => {
  const input = prompt();

  let interruptFlag = false;


  while (!interruptFlag) {
    try {
      let userInput = input('Enter number of computers followed by a space and number of connections => ');
      const [nodes, edges] = userInput.split(' ').map((element) => +element);

      checkNodesAndEdges(nodes, edges)

      const connectionsFrom: number[] = [];
      const connectionsTo: number[] = [];

      for (let index = 0; index < edges; index++) {
        userInput = input(`Connection ${index + 1} => `);
        let [from, to] = userInput.split(' ').map((element) => +element)
        connectionsFrom.push(from);
        connectionsTo.push(to);
      }


      checkFromAndToConnections(nodes, edges, connectionsFrom, connectionsTo)

      userInput = input('Enter number of storage computers => ');
      const storageNodes = +userInput;

      checkStorageNodes(storageNodes)

      const storage: number[] = [];

      for (let storageNodeIndex = 0; storageNodeIndex < storageNodes; storageNodeIndex++) {
        userInput = input(`Storage for Node ${storageNodeIndex + 1} => `);
        storage.push(+userInput)
      }

      userInput = input('Enter the storage threshold => ');
      const threshold = +userInput;

      checkStorageThreshold(threshold);

      return { nodes, edges, connectionsFrom, connectionsTo, storage, threshold };

    } catch (error) {
      interruptFlag = true;
      console.log('Error getting input from user', error)
    }
  }
}


