const jurosSimples = function (Capital, taxa, tempo) {
    console.log(Capital * taxa * tempo)
}

const jurosComposto = function (Capital, taxa, tempo) {
    console.log((Capital * (1 + taxa) ** tempo).toFixed(2))
}

jurosSimples(100, 0.5, 10)
jurosComposto(100, 0.5, 10)