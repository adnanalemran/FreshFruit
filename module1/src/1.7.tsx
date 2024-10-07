{//  Spread and Rest Operator

    // Spread Operator
    //rest operator
    // destructuring  



    // Spread Operator
    const numbers: number[] = [1, 2, 3];
    const newNumbers = [...numbers, 4, 5, 6];
    console.log(newNumbers); // Output: [1, 2, 3, 4, 5, 6]

    const bros: string[] = ["ali", "ahmed", "umer"];
    const bros2: string[] = ["adnan", "arfin", "askik"];
    bros.push(...bros2); //why ? ans : to add all elements of bros2 to bros
    console.log(bros); // Output: ["ali", "ahmed", "umer", "adnan", "arfin", "askik"]

    const mentors1 = {
        typescript: "advanced",
        react: "advanced",
        nodejs: "advanced",
        dbms: "intermediate",
    }
    const mentors2 = {
        prisma: "beginner",
        next: "intermediate",
        clued: "beginner",
    }
    const mentors = { ...mentors1, ...mentors2 };   //why ? ans : to merge two objects
    console.log(mentors); // Output: {typescript: "advanced", react: "advanced", nodejs: "advanced", dbms: "intermediate", prisma: "beginner", next: "intermediate", clued: "beginner"}

    // Rest Operator
    const greetFriends = (...friends: string[]) => {
        console.log(`hi ${friend1}, ${friend2}, ${friend3}`);
    }

    greetFriends("ali", "ahmed", "umer", "abul", "dabul"); // Output: hi ali, ahmed, umer

}