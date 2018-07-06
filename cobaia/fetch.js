const endpoint = 'https://cors.io/?http://dados.fee.tche.br/ckan-download/fee-2010-mun-taxa-de-analfabetismo-de-pessoas-de-15-anos-ou-mais-103163.csv';


fetch(endpoint).then(function(response) {
    return response.text();
}).then(process).catch(console.error);

function strip(s, char) {
    const regex = new RegExp(char, 'g');
    return s.replace(regex, '');
}

function int(s) {
    return Number.parseInt(s);
}

function float(s) {
    return Number.parseFloat(s);
}

function process(text) {
    const rows = text.split('\n');
    // console.table(rows);
    const records = [];
    for (let i = 2; i < rows.length - 1; i++) {
        const columns = rows[i].split(/","/);
        const record = {
            municipio: strip(columns[0], '"'),
            ibge: int(strip(columns[1], '"')),
            location: {
                lat: float(strip(columns[2], '"')),
                long: float(strip(columns[3], '"'))
            },
            taxa: float(strip(columns[4], '"').replace(/,/, '.'))
        };
        records.push(record);
        // records.push(columns);
    }
    // console.table(records);
    let maior = {taxa: 0};
    for (const record of records) {
        if (record.taxa > maior.taxa) {
            maior = record;
        }
    }
    console.log(maior);
    records.sort(function(a, b) {
        return a.taxa > b.taxa ? 1 : -1;
    });
    console.log(records);
}
