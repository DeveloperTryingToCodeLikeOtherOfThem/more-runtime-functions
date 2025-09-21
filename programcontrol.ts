type Program = () => void
type Running = Program

namespace __program {
     class Bug {
        bug: Bug 
       protected outOfProgram: () => void 
       protected isOutOfContext: () => boolean 
        program: Program 

        constructor() {
            this.bug = this 
            this.program = () => control.EventContext.onStats("Programming...")
        }

        throwError(error: string) {
            throw error
        }

       protected isOutOfProgramming(on: boolean, line: string) {
            if(on) {
                throw "Error code" + line
            } else {
                // Everything seems fine!
            }
        }

       protected handlerControls () {
            if(this.outOfProgram) {
                this.throwError("")
            }
        }
    }

    let _bug: Bug
    export function outOfProgram() {
        _bug = new Bug()
        if(_bug) {
            _bug.throwError("Out Of Program!")
        } else {
            // Everything seems fine!
        }
    }
}

namespace programControl {
    class RunStatics {
        run: Running 

        constructor() {
            let run: Program
            this.run = run
        }
    }

    let _run: RunStatics
    export function isOutOfRun() {
      if(_run) {
          return;
      } else {
          throw "The Console Did Not Run Properly."
      }
    }
}