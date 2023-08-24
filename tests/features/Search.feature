@browsedisco
Feature: Search
  As a Kmart customer when I do a Search
  I want to see search suggestions and product suggestions
  So that I can select relevant products to purchase and add the product tp bag

  @somin
  Scenario Outline: Search product, add product to bag, check details on page and verify shipping costs
    Given a customer loads the Kmart home page
    When customer searches for product "<searchTerm>"
    And customer clicks on the product from search results
    Then assert product title "<searchTerm>" and price "$10.00 ea" are displayed on product page
    Then customer adds product to cart
    When customer clicks on click and collect button
    Then assert all fields exists on checkout page including product name "<searchTerm>" bag total of "$10.00"
    When customer clicks on delivery button
    Then assert all fields exists on checkout page including product name "<searchTerm>" bag total of "$20.00"
    Then assert shipping charge for delivery is "$10.00"
    Examples:
      | searchTerm                    |
      | Bubble Fairy Wand - Assorted  |
