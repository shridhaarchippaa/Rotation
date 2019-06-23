package rotate;

import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.util.Iterator;

import javax.imageio.ImageIO;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;

public class ImageRotate {
	public static final int ANTI_CLOCKWISE = -1;
	public static final int CLOCKWISE = 1;

	public static void rotate(File input, File output, int angle) {
		try {
			ImageInputStream imageInputStream = ImageIO.createImageInputStream(input);//register the image from the file
			Iterator<ImageReader> imageIterator = ImageIO.getImageReaders(imageInputStream);//reads the registered image by iterating
			ImageReader reader = imageIterator.next();
			String formatName = reader.getFormatName();//getting the existing format of the image

			BufferedImage bufferedImage = ImageIO.read(imageInputStream);//if reader is registered (e.g: getImageReaders above) this will close inputStream else null is returned
			int width = bufferedImage.getWidth();
			int height = bufferedImage.getHeight();

			BufferedImage rotatedImage = new BufferedImage(height, width, bufferedImage.getType());//Buffer to store the rotated image
			for(int y=0; y<height; y++) {
				for(int x=0; x<width; x++) {
					if(angle == ANTI_CLOCKWISE) 
						rotatedImage.setRGB(y, (width - 1) - x, bufferedImage.getRGB(x, y));
					else  
						rotatedImage.setRGB((height - 1) - y, x, bufferedImage.getRGB(x, y));

				}
			}

			ImageIO.write(rotatedImage, formatName, output);//Write the image to the file
		} catch (IOException | IllegalArgumentException ex) {
			ex.printStackTrace(); //inputStream - if cache file is not created or error occurs during reading or if input file not found
		}
	}

}

