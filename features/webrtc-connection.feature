Feature: WebRTC Connection

  I want to check if both Media and Data connection can establish

  Scenario: Peer1 and Peer2 should establish a Video connection
    Given Peer1 open room
    And Peer2 open room
    When Both room ready, they should automatically Connected
    Then Peer2 should see Peer1
    And Peer1 should also see Peer2

  Scenario: Peer1 and Peer2 should establish a Data connection
    Given Peer1 open room
    And Peer2 open room
    When Both room ready, they should automatically Connected
    Then Peer1 send "Hello Peer2" on chatbox
    And Peer2 should receive "Hello Peer2"
    And Peer2 "Hello Peer1" on chatbox
    And Peer1 should receive "Hello Peer1"