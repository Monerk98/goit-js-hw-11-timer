class NewYearTimer {
    constructor({selector, targetDate}) {
              this.targetDate = new Date(targetDate);
              this.days = document.querySelector(`${selector} .value[data-value="days"]`);
              this.hours = document.querySelector(`${selector} .value[data-value="hours"]`);
              this.minutes = document.querySelector(`${selector} .value[data-value="mins"]`);
              this.seconds = document.querySelector(`${selector} .value[data-value="secs"]`);
          
            }

            getCurrentTime() {
            return this.targetDate - Date.now();
              }
            
              startTimer() {
            setInterval(() => {
            if(this.getCurrentTime() >= 0){
                this.days.textContent = Math.floor(this.getCurrentTime() / (1000 * 60 * 60 * 24));
                this.hours.textContent = Math.floor((this.getCurrentTime() % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                this.minutes.textContent = Math.floor((this.getCurrentTime() % (1000 * 60 * 60)) / (1000 * 60));
                this.seconds.textContent = Math.floor((this.getCurrentTime() % (1000 * 60)) / 1000);
            }
            else{
                document.querySelector('#timer-1').innerHTML = 'Happy New Year'
            }
            },1000);
        }

        }

 const Timer = new NewYearTimer({
    selector: '#timer-1',
    targetDate: new Date('31 December 2021'),
  });
Timer.startTimer()