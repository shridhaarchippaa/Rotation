package rotate;

import java.io.File;

public class TestRotate {

	public static void main(String[] args) {
		long startTime = System.currentTimeMillis();

		File input = new File("C:\\Shridhaar\\Personal\\Pics\\24.jpg");
		File output = new File("C:\\Shridhaar\\Personal\\Pics\\rotate.jpg");
		
//		ImageRotate.rotate(input, output, ImageRotate.ROTATE_LEFT);
		ImageRotate.rotate(input, output, ImageRotate.ROTATE_RIGHT);
		
		long endTime = System.currentTimeMillis();
		long totalTime = endTime - startTime;

		System.out.println("Total time in seconds :" + totalTime/1000.0);
	}

}