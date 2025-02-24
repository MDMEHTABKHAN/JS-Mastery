credentials = {}
users_db = {}
passbook = {}
nested_t = {}

import datetime
import random

print("\n" + "~" * 50)
print("\t\tWELCOME TO HDFC BANK")
print("~" * 50 + "\n")
print("How can we assist you today?")

while True:
    print("""
=====================================
1. Open an Account
2. View Account Details
3. Perform Transactions (Withdraw/Deposit/Transfer)
4. View Transaction History
5. Exit
=====================================
""")
    choice = int(input("Enter your choice (1-5): "))

    if choice == 1:  # Open an Account
        print("\n~~~~~~~~~~ ACCOUNT REGISTRATION ~~~~~~~~~~")
        fname = input("Enter First Name: ")
        lname = input("Enter Last Name: ")
        age = input("Enter Age: ")
        city = input("Enter City Name: ")
        pancard = input("Enter Pan Card Number: ")

        if pancard in users_db.keys():
            print("\n⚠️ Your Account already exists! Try Again.\n")
            continue

        account_number = "11112222" + ''.join(str(random.randint(0, 9)) for _ in range(4))
        account_type = input("Which type of account would you like to open? (Current/Savings): ")
        balance = int(input("Enter initial deposit amount: ₹"))

        username = fname + ''.join(str(random.randint(0, 9)) for _ in range(2))
        password = ''.join(str(random.randint(0, 9)) for _ in range(4))

        print("\n✨ Account Successfully Created! ✨")
        print(f"👤 Username: {username}")
        print(f"🔑 Password: {password}")
        print(f"🏦 Account Number: {account_number}")
        print(f"💰 Initial Balance: ₹{balance}\n")

        credentials[username] = password
        users_db[pancard] = [fname, lname, account_number, account_type, balance]

    elif choice == 2:  # View Account Details
        print("\n~~~~~~~~~~ VIEW ACCOUNT DETAILS ~~~~~~~~~~")
        un = input("Enter username: ")
        ps = input("Enter password: ")
        pc = input("Enter pancard: ")

        if un in credentials and ps == credentials[un] and pc in users_db:
            print("\n📄 Your Account Details:")
            print(f"🏦 Account Number: {users_db[pc][2]}")
            print(f"👤 Name: {users_db[pc][0]} {users_db[pc][1]}")
            print(f"💳 Account Type: {users_db[pc][3]}")
            print(f"💰 Balance: ₹{users_db[pc][4]}\n")
        else:
            print("\nInvalid details! Please try again.\n")

    elif choice == 3:  # Perform Transactions
        print("\n~~~~~~~~~~ TRANSACTIONS ~~~~~~~~~~")
        un = input("Enter username: ")
        ps = input("Enter password: ")
        pc = input("Enter pancard: ")

        if un in credentials and ps == credentials[un] and pc in users_db:
            print("\n1. Deposit\n2. Withdraw\n3. Transfer")
            t_type = input("Enter transaction type: ").capitalize()

            if t_type == "Deposit":
                t_amount = float(input("Enter deposit amount: ₹"))
                users_db[pc][4] += t_amount
                timestamp = datetime.datetime.now()
                print(f"\nDeposit Successful! New Balance: ₹{users_db[pc][4]}\n")

            elif t_type == "Withdraw":
                t_amount = float(input("Enter withdrawal amount: ₹"))
                if t_amount > users_db[pc][4]:
                    print("\nInsufficient Balance!\n")
                else:
                    users_db[pc][4] -= t_amount
                    timestamp = datetime.datetime.now()
                    print(f"\nWithdrawal Successful! Remaining Balance: ₹{users_db[pc][4]}\n")

            elif t_type == "Transfer":
                r_pancard = input("Enter recipient's PAN card number: ")
                t_amount = float(input("Enter transfer amount: ₹"))
                if r_pancard in users_db and t_amount <= users_db[pc][4]:
                    users_db[pc][4] -= t_amount
                    users_db[r_pancard][4] += t_amount
                    timestamp = datetime.datetime.now()
                    print(f"\nTransfer Successful! Remaining Balance: ₹{users_db[pc][4]}\n")
                else:
                    print("\nTransfer Failed! Invalid details or insufficient balance.\n")

            else:
                print("\nInvalid Transaction Type!\n")

            nested_t[timestamp] = [t_type, t_amount, users_db[pc][4]]
            passbook[pc] = nested_t
        else:
            print("\nInvalid account details! Please try again.\n")

    elif choice == 4:  # View Transaction History
        print("\n--- TRANSACTION HISTORY ---")
        un = input("Enter username: ")
        ps = input("Enter password: ")
        pc = input("Enter pancard: ")

        if un in credentials and ps == credentials[un] and pc in users_db:
            print("\nTransaction History:")
            print("Timestamp | Type | Amount | Balance")
            print("-" * 50)
            if pc in passbook:
                for timestamp, details in passbook[pc].items():
                    print(f"{timestamp} | {details[0]} | ₹{details[1]} | ₹{details[2]}")
            else:
                print("No transactions found!")
        else:
            print("\nInvalid account details!\n")

    elif choice == 5:  # Exit
        print("\n🙏 Thank you for banking with HDFC! Have a great day! 🙏\n")
        print("~" * 50)
        break

    else:
        print("\n⚠️ Invalid choice! Please select a valid option.\n")