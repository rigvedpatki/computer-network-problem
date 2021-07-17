import { ComputerNode } from "./computer-node";

export class Network {
  private _head: ComputerNode | null = null;

  public insertAtStart(storage: number, index: number): ComputerNode {
    const newComputerNode = new ComputerNode(storage, index);
    if (!this._head) {
      this._head = newComputerNode;
    } else {
      this._head.previous = newComputerNode;
      newComputerNode.next = this._head;
      this._head = newComputerNode;
    }
    return newComputerNode;
  }

  public insertAtEnd(storage: number, index: number): ComputerNode {
    const newComputerNode = new ComputerNode(storage, index);
    if (!this._head) {
      this._head = newComputerNode;
    } else {
      const nodeExist = this.search((nodeIndex) => nodeIndex == index);
      if (!nodeExist) {
        const lastComputerNode = this._getLastNode(this._head);
        newComputerNode.previous = lastComputerNode;
        lastComputerNode.next = newComputerNode
      }
    }
    return newComputerNode;
  }

  public deleteNode(computerNode: ComputerNode): void {
    if (!computerNode.previous) {
      this._head = computerNode.next;
    } else {
      const previousComputerNode = computerNode.next;
      if (previousComputerNode) {
        previousComputerNode.next = computerNode.next;
      }
    }
  }

  public traverseNetwork(): networkNode[] {
    const networkArray: networkNode[] = [];
    if (!this._head) {
      return networkArray;
    }

    return this._addComputerNodeToArray(this._head, networkArray);
  }

  public search(comparator: (nodeIndex: number) => boolean): ComputerNode | null {
    const checkNext = (node: ComputerNode): ComputerNode | null => {
      if (comparator(node.nodeIndex)) {
        return node;
      }
      return node.next ? checkNext(node.next) : null;
    };

    return this._head ? checkNext(this._head) : null;
  }

  private _getLastNode(node: ComputerNode): ComputerNode {
    if (node.next) {
      return this._getLastNode(node.next)
    } else {
      return node;
    }
  }

  private _addComputerNodeToArray(nextComputerNode: ComputerNode, networkArray: networkNode[]): networkNode[] {
    networkArray.push({ nodeIndex: nextComputerNode.nodeIndex, storage: nextComputerNode.storage });
    if (nextComputerNode.next) {
      return this._addComputerNodeToArray(nextComputerNode.next, networkArray);
    } else {
      return networkArray;
    }
  }
}

interface networkNode {
  nodeIndex: number;
  storage: number
}