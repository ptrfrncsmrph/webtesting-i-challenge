module Main where

import Prelude

import Data.Foldable (fold)
import Effect (Effect)
import Effect.Console (log)
import Simple.JSON as JSON

type Item =
  { name         :: String
  , enhancement  :: Int
  , durability   :: Int
  }

exampleItem :: Item
exampleItem =
  { name: "Example" 
  , enhancement: 20
  , durability: 20
  }

repair :: Item -> Item
repair item = item { enhancement = 100 }

succeed :: Item -> Item
succeed item = item { enhancement = min (item.enhancement + 1) 20 }

fail :: Item -> Item
fail = fail' <<< fail'' 
  where
    fail' item
          | item.enhancement > 16 = item { enhancement = item.enhancement - 1 }
          | otherwise = item
    fail'' item
          | item.enhancement < 15 = item { durability = max (item.durability - 5) 0 }
          | otherwise = item { durability = max (item.durability - 10) 0 }

get :: Item -> Item
get item
  | item.enhancement > 0 = item { name = fold ["[+", show item.enhancement, "] ", item.name] }
  | otherwise = item

main :: Effect Unit
main = do 
  log $ JSON.writeJSON $ repair exampleItem
  log $ JSON.writeJSON $ succeed exampleItem
  log $ JSON.writeJSON $ fail exampleItem
  log $ JSON.writeJSON $ get exampleItem

  