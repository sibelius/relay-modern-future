let message =
  switch (data) {
  | GoodResult(theMessage) => "Success! " ++ theMessage
  | BadResult(0 | 1 | 5) => "Something's wrong. It's a server side problem."
  | BadResult(errorCode) => "Unknown error occurred. Code: " ++ string_of_int(errorCode)
  | NoResult => "Things look fine"
  };
