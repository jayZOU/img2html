class Imgtohtml{
	constructor(elm, renderElm, step, byte) {
		this.elm = elm;
		this.renderElm = renderElm;
		this.step = step;
		this.byte = byte
		this.canvas = document.createElement('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.imgData = [];
		this.imgPixData = [];

		this.getImgSize();
	}

	getImgSize() {
		this.imgData = {
			width: this.elm.width,
			height: this.elm.height,
		}

		this.render();
	}

	getImgData() {
		let imgPixData = this.ctx.getImageData(0, 0, this.imgData.width, this.imgData.height).data;
		this.imgPixData = Array.from(imgPixData);
	}

	getChunkedImageData() {
		const perChunk = 4;
		const pixChunk = 2;

        let chunked = this.imgPixData.reduce((ar, it, i) => {
        	// if(pixChunk < 0) 
            const ix = Math.floor(i / perChunk)
            if (!ar[ix]) {
                ar[ix] = []
            }
            ar[ix].push(it);
            return ar
        }, []);


        this.imgPixData = chunked;
	}

	getStepImageData() {
		let data = [],
			imgPixData = this.imgPixData,
			width = this.imgData.width,
			height = this.imgData.height,
			len = imgPixData.length,
			step = this.step,
			j = 1,
			r = 0,
			g = 0,
			b = 0;

		for(let i = 0; i < len - width; i = i + step) {
			if(i >= j * width){
				i = (j + step - 1) * width;
				j = j + step;
			}
			if(i >= Math.floor(height / step) * width * step) break;
			
			for(let m = 0; m < step; m++){
				r +=  imgPixData[i + m][0];
				g +=  imgPixData[i + m][1];
				b +=  imgPixData[i + m][2];
				for(let n = 1; n < step; n++){
					r +=  imgPixData[i + n*width + m][0];
					g +=  imgPixData[i + n*width + m][1];
					b +=  imgPixData[i + n*width + m][2];
				}
			}
			r = Math.floor(r / (step * step));
			g = Math.floor(g / (step * step));
			b = Math.floor(b / (step * step));
			data.push([r, g, b]);
			

		}
		this.imgPixData = data;

	}

	render() {
		this.canvas.width = this.imgData.width;
		this.canvas.height = this.imgData.height;
		this.ctx.drawImage(this.elm, 0, 0, this.imgData.width, this.imgData.height);

		this.getImgData();
		this.getChunkedImageData();
		this.step != 1 && this.getStepImageData();

		let htmlData = ``;
		let count = 0;
		let i = 0;

		this.imgPixData.forEach((item) => {
			count ++;
			i++;
			htmlData += `<span style="font-size: 1px; color: rgb(${item[0]},${item[1]},${item[2]});">${this.byte}</span>`
			if(count >= this.imgData.width / this.step){
				htmlData += `<br>`;
				count = 0;
			}
		})

		this.renderElm.innerHTML = htmlData;


	}
}

export function img2html(elm, renderElm, step = 2, byte = '微') {
	let img2html = new Imgtohtml(elm, renderElm, step, byte);
}
