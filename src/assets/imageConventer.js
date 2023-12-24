import imagemin from 'imagemin';
import imageminPngquant from 'imagemin-pngquant';
import optimazer from 'imagemin-optipng'

const files = await imagemin(['./png/foto/*.png'], {
	destination: './png_compressed',
	plugins: [
		imageminPngquant({
			quality: [0.4, 0.6],
			speed: 1
		})
	]
});

const optimizedFiles = await imagemin(['./png/foto/*.png'], {
	destination: './png_optimized',
	plugins: [
		optimazer({
			optimizationLevel: 5,
			bitDepthReduction: true,
			colorTypeReduction: true,
			paletteReduction: true
		})
	]
}); 