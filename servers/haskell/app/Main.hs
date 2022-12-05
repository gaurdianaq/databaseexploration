module Main where

data Coordinates = Coordinates Float Float
data Race = Human | Elf | DarkElf | Dwarf | Orc | Skeleton | Vampire | Dragonian
data Faction = Light | Dark | Chaos | Balance 
data Location = Location {
      locationName :: String
    , coordinates :: Coordinates
    , locationPeople :: Maybe [Character]
}

data Item = Item {
      itemName :: String 
    , weight :: Float 
    , owned_by :: Maybe Character
    , possessed_by :: Maybe Character
    , value :: Int 
}

data Inventory = Inventory {
      items :: [Item]
    , max_size :: Int
}

data Property = Property {
      location :: Location
    , propertyInventory :: Inventory 
    , propertyOwners :: Maybe [Character]
}

data Character = Character {
      characterName :: String 
    , race :: Race 
    , money :: Int 
    , isAlive :: Bool 
    , faction :: Faction 
    , currentLocation :: Location 
    , home :: Property
    , level :: Int 
    , strength :: Int 
    , dexterity :: Int 
    , intelligence :: Int
    , faith :: Int 
    , vitality :: Int 
    , endurance :: Int 
    , characterInventory :: Inventory
}

main :: IO ()
main = putStrLn "Hello, Haskell!"
