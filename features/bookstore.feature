Feature: Bookstore purchase flow
  Scenario: User completes purchase and deletes order
    Given user is logged into the bookstore
    Then user should see books list home page
    When user searches a product and adds it to cart
    Then user should see checkout page
    And user completes checkout and purchase
    Then user deletes the order