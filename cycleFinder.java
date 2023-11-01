//https://www.hackerrank.com/challenges/ctci-linked-list-cycle/problem

/*
Detect a cycle in a linked list. Note that the head pointer may be 'null' if the list is empty.

A Node is defined as: 
    class Node {
        int data;
        Node next;
    }
*/


boolean hasCycle(Node head) {
    if (head == null || head.next == null) { //making sure we don't have a linked list of size 0 or 1
        return false;
    }

    Node slow = head;
    Node fast = head.next;

    while (slow != fast) {
        if (fast == null || fast.next == null) { //making sure we haven't iterated to the end of the linked list
            return false; 
        }
        slow = slow.next; //normal iteration
        fast = fast.next.next; //fast iteration that will eventually catch up to slow iteration if there is a cycle
    }

    return true; 
}