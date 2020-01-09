class CardGame


  def checkforAce(card) #ruby naming convention is nut used here. self. should be before function name
    if card.value = 1 #should be == not =
      return true
    else #not needed
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


def self.cards_total(cards)
  total #total is not set to an initial value
  for card in cards
    total += card.value
    return "You have a total of" + total #should be "You have a total of #{total}"
  end #this should be before the return line
end
