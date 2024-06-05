package com.hauphuong.book_social.exception;

public class OperationNotPermittedException extends RuntimeException{
    public OperationNotPermittedException(String msg){
        super(msg);
    }
}
