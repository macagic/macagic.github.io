            let showSymbl = true;

            function clock() {
                let now = new Date()
                let hour = now.getHours() + ''
                let minute = now.getMinutes() + ''
                let month = (now.getMonth() + 1) + ''
                let day = now.getDate() + ''
                if (showSymbl) {
                    document.getElementById('timer').innerHTML = `${hour.padStart(2, '0')}<span>:</span>${minute.padStart(2, '0')}`
                } else {
                    document.getElementById('timer').innerHTML = `${hour.padStart(2, '0')}<span style="color:#0d1320">:</span>${minute.padStart(2, '0')}`
                }
                document.getElementById('date').innerHTML = `${month.padStart(2, '0')}月${day.padStart(2, '0')}日`
                showSymbl = !showSymbl
            }
            clock()
            setInterval(() => {
                clock()
            }, 1000)
