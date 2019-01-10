export class Match{
    team1:string;
    team2:string;
    toss:string;
    decision:string;
    overs:any;
    constructor(team1:string,team2:string,
        toss:string,
        decision:string,
        overs:any)
    {
        this.team1=team1;
        this.team2=team2;
        this.toss=toss;
        this.decision=decision;
        this.overs=overs;
    }
    
}