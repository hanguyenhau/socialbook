package com.hauphuong.book_social.file;

import com.hauphuong.book_social.security.UserDetailsServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;

@Slf4j
public class FileUtils {
    private static final Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);
    public static byte[] readFileFromLocation(String fileUrl){
        if(StringUtils.isBlank(fileUrl)){
            return null;
        }
        try{
            Path filePath = new File(fileUrl).toPath();
            return Files.readAllBytes(filePath);
        }catch(IOException e){
            log.warn("No file found in the path {}", fileUrl);
        }
        return null;
    }
}
