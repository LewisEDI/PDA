### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby

class CardGame


  def checkforAce(card) #ruby naming convention is not used for the function name, should be snake case. self. should be before the function name
    if card.value = 1 #should be == not =
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2) #dif should be def,  there should be a coma should be between card1 and card 2, self. needed before function name
  if card1.value > card2.value
    return card  #should be card1 not card
  else
    return card2
  end
end
end #this end should be removed

def self.cards_total(cards)
  total #total is not set to an initial value
  for card in cards
    total += card.value
    return "You have a total of" + total #should be "You have a total of #{total}"
  end #this should be before the return line
end

#extra end needed here to close the class
```
