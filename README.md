# PasswordGenerator

GIVEN I need a new, secure password

WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria - yes

WHEN prompted for password criteria
THEN I select which criteria to include in the password - yes

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters - yes

WHEN prompted for character types to include in the password
THEN I choose lowercase, uppercase, numeric, and/or special characters - yes

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected - yes

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria - yes

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page - yes
