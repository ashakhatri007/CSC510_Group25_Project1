import org.junit.jupiter.api.Test;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;

import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.*;

import com.github.cliftonlabs.json_simple.JsonException;
import com.github.cliftonlabs.json_simple.JsonObject;

/*
 * MIT License
 *
 * Copyright (c) 2021. CSC510-Group-25
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/**************************
 * Originally authored by: Asha Khatri
 * GitHub ID: ashakhatri007
 *
 * CSC510 Fall 2021
 * North Carolina State University
 *
 * File name: OrderTests.java
 **************************/

/**
 * Class for unit tests.
 *
 * Unimplemented methods will not be tested.
 */

 public class OrderTests {

     // in case we need to capture printed output
     private ByteArrayOutputStream output;
     private final InputStream stdIn = System.in;
     private final PrintStream stdOut = System.out;
     Util util = new Util();
 
     //@Before
     public void setupIO() {
         // to help manage IO
         output = new ByteArrayOutputStream();
         System.setOut(new PrintStream(output));
     }
 
     //@After
     public void restoreIO() {
         // restores standard input/output
         System.setIn(stdIn);
         System.setOut(stdOut);
     }
     @Test
     public void Order_getters() {
         Order o1 = new Order(util.constructRecipe1(),10,10);
 
         assertEquals("recipe1",o1.getRecipe().getRecipeName());
         assertEquals(10,o1.getNum_orders());
         assertEquals(10,o1.getNum_failures());
     }
 
     @Test
     public void Order_toString() {
         String thing = "recipe1: ID 1111\nNumber of successful orders: 10\nNumber of failed orders: 10";
         Order o = new Order(util.constructRecipe1(),10,10);
 
         assertEquals(thing,o.toString());
     }
 
     @Test
     public void Order_isEqual(){
         Order o1 = new Order(util.constructRecipe1(),10,10);
         Order o2 = new Order(util.constructRecipe1(),10,10);
         Order o3 = new Order(util.constructRecipe2(),5,5);
 
         assertTrue(o1.isEqual(o2));
         assertFalse(o1.isEqual(o3));
         assertFalse(o1.isEqual(10));
         assertFalse(o1.isEqual(null));
     }
 
 
}
