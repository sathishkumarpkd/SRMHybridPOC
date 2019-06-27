package com.daimler.srm.hybrid.proxy;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class MyServletDemo
 */
@WebServlet("/MyServletDemo")
public class MyServletDemo extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private String mymsg;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MyServletDemo() {
        super();
        mymsg = "Hello World!";
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		  // Setting up the content type of webpage
	      response.setContentType("text/html");

	      // Writing message to the web page
	      PrintWriter out = response.getWriter();
	      out.println("<h1>" + mymsg + "</h1>");
	      
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
