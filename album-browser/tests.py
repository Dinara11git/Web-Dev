import os

questions = {
    '1': 'Paris',
    '2': '7',
    '3': 'Pacific',
    '4': 'Shakespeare',
    '5': 'H2O',
    '6': '1945',
    '7': 'Cheetah',
    '8': '2',
    '9': 'Mars',
    '10': '6'
}

questions_text = {
    '1': 'Capital of France?',
    '2': 'How many continents?',
    '3': 'Largest ocean?',
    '4': 'Who wrote Romeo and Juliet?',
    '5': 'Chemical symbol for water?',
    '6': 'Year WWII ended?',
    '7': 'Fastest land animal?',
    '8': 'Smallest prime number?',
    '9': 'Red Planet?',
    '10': 'Strings on a guitar?'
}

os.system('cls' if os.name == 'nt' else 'clear')
print("="*50)
print("QUICK ANSWER CHECKER".center(50))
print("="*50)

correct = 0
total = 0

while True:
    print("\nAvailable questions:")
    for num in questions:
        print(f"{num}. {questions_text[num]}")
    print("0. Exit")
    
    choice = input("\nYour choice: ").strip()
    
    if choice == '0':
        print(f"\nFinal: {correct}/{total}")
        break
    
    if choice in questions:
        total += 1
        # Ввод ответа сразу в той же строке
        answer = input(f"{questions_text[choice]} → ").strip()
        
        if answer.lower() == questions[choice].lower():
            print("✅ Good job!")
            correct += 1
        else:
            print(f"❌ Nope. Answer: {questions[choice]}")
        
        print(f"Score: {correct}/{total}")
    else:
        print("❌ Invalid number")
    
    input("\nPress Enter to continue...")
    os.system('cls' if os.name == 'nt' else 'clear')