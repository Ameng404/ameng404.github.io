fetch('../data/column.json')
    .then(response => response.json())
    .then(res => {
        const { data } = res.result;
        if (res.success && data && data.length > 0) {
            const tmp = data.map(item => `<li>${item}</li>`)
            console.log(tmp.join(""))
            document.getElementById('column').innerHTML = tmp.join("")
        }
    });