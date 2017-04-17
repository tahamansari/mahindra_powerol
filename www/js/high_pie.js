Highcharts.chart('pachkacontainer', {

    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
    },
    title: {
        text: '',
        useHTML: true,
        align: 'center',
        verticalAlign: 'middle',
        y: 60
    },
    tooltip:{
        enabled: false,
    },
    plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -90,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            borderWidth: '10px',
            borderColor: 'transparent',
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
        }
    },
    series: [{
        type: 'pie',
        name: '5 KA PUNCH',
        innerSize: '45%',
        data: [{
            name: 'Silence Certified <br> <img src="img/popup_inner_icon.png" class="pie_sec1">',
            y: 20,
            drilldown: 'Silence Certified',
            color: '#eb113b',
        }, {
            name: 'Peace of Mind <br> <img src="img/popup_inner_icon.png" class="pie_sec2">',
            y: 20,
            color: '#0075b6',
            drilldown: 'Peace of Mind'
        }, {
            name: 'Fuel Intelligent <br> <img src="img/popup_inner_icon.png" class="pie_sec3">',
            y: 20,
            color: '#eb113b',
            drilldown: 'Fuel Intelligent'
        }, {
            name: 'Fastest Delivery <br> <img src="img/popup_inner_icon.png" class="pie_sec4">',
            y: 20,
            color: '#0075b6',
            drilldown: 'Fastest Delivery'
        }, {
            name: 'Power Brand <br> <img src="img/popup_inner_icon.png" class="pie_sec5">',
            y: 20,
            color: '#eb113b',
            drilldown: 'Power Brand'
        }],
        dataLabels: {
            useHTML: true,
        }
    }],
    drilldown: {
        drillUpButton: {
            relativeTo: 'spacingBox',
            position: {
                y: 600,
                x: -325
            },
           theme: {
                fill: 'transparent',
                'stroke-width': 0,
                stroke: 'transparent',
                r: 0,
                states: {
                    hover: {
                        fill: '#bada55'
                    },
                    select: {
                        stroke: '#039',
                        fill: '#bada55'
                    }
                }
            }
        },
        series: [{
        	type: 'pie',
            name: 'Silence Certified',
            id: 'Silence Certified',
            data: [{
                name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Silence Certified</h1><p style="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
                y: 100,
                color: '#eb113b',
            }],
            dataLabels: {
                useHTML: true,
            }
        }, {
        	type: 'pie',
			name: 'Peace of Mind',
            id: 'Peace of Mind',
            data: [{
                name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Peace of Mind</h1><p style="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
                y: 100,
                color: '#0075b6',
            }],
            dataLabels: {
                useHTML: true,
            }
        }, {
        	type: 'pie',
            name: 'Fuel Intelligent',
            id: 'Fuel Intelligent',
            data: [{
                name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Fuel Intelligent</h1><p style ="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
                y: 100,
                color: '#eb113b',
            }],
            dataLabels: {
                useHTML: true,
            }
        }, {
        	type: 'pie',
            name: 'Fastest Delivery',
            id: 'Fastest Delivery',
            data: [{
                name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Fastest Delivery</h1><p style ="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
                y: 100,
                color: '#0075b6',
            }],
            dataLabels: {
                useHTML: true,
            }
        }, {
        	type: 'pie',
            name: 'Power Brand',
            id: 'Power Brand',
            data: [{
                name: '<img src="img/popup_inner_icon1.png" style="width: 50%;"><h1 style="margin: 4%;">Power Brand</h1><p sty="margin: 5px; line-height: 25px;">Compliance to Stringent Noise <br>& <br> Emission norms.</p>',
                y: 100,
                color: '#eb113b',
            }],
            dataLabels: {
                useHTML: true,
            }
        }]
    }
});
