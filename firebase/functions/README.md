# Cloud Functions for Mystic the Get-together

Before deploying these functions, make sure to edit `../.firebaserc` to target your Firebase project. You will also need to ensure that you are on the Blaze (pay as you go) plan and then enable the necessary APIs (the `firebase` tool should let you know if anything is awry).

There is configuration required for these functions. Currently, it is just making the WrapAPI key available. You can do so by calling `firebase functions:config:set wrapapi.key="API KEY HERE"`

I haven't figured out if you can set configuration when running the local emulator, so currently, when in the emulator, replace calls to `functions.config().wrapapi.key` with the actual key value.

You can deploy these functions by running `firebase deploy --only functions`

Example:
```bash
export FIREBASE_FUNCTION_BASE_URL=https://us-central1-mystic-the-get-together-8e05e.cloudfunctions.net

# Import a deck from MTGGoldfish for a player
importDeckFunction() {
    http -v POST "${FIREBASE_FUNCTION_BASE_URL}/${0}" player=eric uri=https://www.mtggoldfish.com/deck/1511674
}

# A player hosts a game using a specific deck that player owns
# The deckId can be gleaned from the headers of the importDeckFunction response
hostGameFunction() {
    http -v POST "${FIREBASE_FUNCTION_BASE_URL}/${0}" player=eric deckId=?
}

# A player joins an existing game using a specific deck that player owns
# The gameId can be gleaned from the headres of the hostGameFunction response
joinGameFunction() {
    http -v POST "${FIREBASE_FUNCTION_BASE_URL}/${0}" player=anthony deckId=?
}

# Start the target game by determining the turn order
startGameFunction() {
    http -v POST "${FIREBASE_FUNCTION_BASE_URL}/${0}" gameId=?
}

# Clients may want to get Scryfall data for cards in the game
# The deckId value is set as part of the player document
populateDeckFunction() {
    http -v POST "${FIREBASE_FUNCTION_BASE_URL}/${0}" player=eric deckId=? include:='["id"]'
}

# Of use for a deck editor
parseDeckFunction() {
    http -v POST "${FIREBASE_FUNCTION_BASE_URL}/${0}" uri=https://www.mtggoldfish.com/deck/1511674
}
```