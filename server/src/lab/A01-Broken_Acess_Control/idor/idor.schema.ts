export interface User {
    id: number;
    username: string;
    password: string;
    flag: string | null;
  }
  

  export const users: User[] = [
    { id: 18, username: 'alice', password: 'alicePass', flag: 'vulearn$%7B_IDOR_hacked%7D' },
    { id: 2, username: 'bob', password: 'bobPass', flag: null },
    { id: 3, username: 'carol', password: 'carolPass', flag: null },
  ];
  