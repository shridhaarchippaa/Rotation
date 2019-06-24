package rotate;

import java.io.File;

public class TestRotate {

	public static void main(String[] args) {
		long startTime = System.currentTimeMillis();

		File input = new File("C:\\Users\\shridhaar.chippaa\\eclipse-workspace\\Rotation\\WebContent\\24.jpg");
		File output = new File("C:\\Users\\shridhaar.chippaa\\eclipse-workspace\\Rotation\\WebContent\\rotate.jpg");
		
//		ImageRotate.rotate(input, output, ImageRotate.ANTI_CLOCKWISE);
		ImageRotate.rotate(input, output, ImageRotate.CLOCKWISE);
		
		long endTime = System.currentTimeMillis();
		long totalTime = endTime - startTime;

		System.out.println("Total time in seconds :" + totalTime/1000.0);
	}

}
