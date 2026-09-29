
abstract class Playerscoreaverage
{
    constructor(public name:string)
    {

    }

    displayplayerscoreaverage():void
    {
        console.log(`Player Name is ${this.name} | and aveage is ${this.getscore()} `)
    }

    abstract getscore():number
}

class Score extends Playerscoreaverage
{
    constructor(public runs:number, public numberofmatch:number)
    {
        super("Dhoni")
    }

    getscore():number
    {
        return (this.runs/this.numberofmatch)
    }
}

const score=new Score(7000,123)

score.displayplayerscoreaverage()
